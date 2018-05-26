// CodeMirror, copyright (c) by Casbin
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  CodeMirror.defineMode("casbin-conf", function() {
    function tokenBase (stream, state) {
      var ch = stream.peek();

      if (ch === "[") {
        if (stream.match("[request_definition") || stream.match("[policy_definition")) {
          state.sec = "rp";
          stream.skipTo("]");
          stream.eat("]");
          return "header"
        } else if (stream.match("[role_definition")) {
          state.sec = "ro";
          stream.skipTo("]");
          stream.eat("]");
          return "header"
        } else if (stream.match("[policy_effect")) {
          state.sec = "e";
          stream.skipTo("]");
          stream.eat("]");
          return "header"
        } else if (stream.match("[matchers")) {
          state.sec = "m";
          stream.skipTo("]");
          stream.eat("]");
          return "header"
        } else {
          state.sec = "";
          stream.skipTo("]");
          stream.eat("]");
          return ""
        }
      } else if (ch === "#") {
        stream.skipToEnd();
        return "comment";
      } else if (ch === "\"") {
        stream.skipToEnd();
        stream.skipTo("\"");
        stream.eat("\"");
        return "string"
      } else if (ch === "=") {
        state.after_equal = true
        stream.eat("=");
      }

      if (stream.sol()) {
        state.after_equal = false
      }

      if (state.sec === "") {
        stream.skipToEnd();
        return ""
      }

      if (!state.after_equal) {
        if (stream.match("r") || stream.match("p") || stream.match("e") || stream.match("m") || stream.match("g2") || stream.match("g")) {
          return "variable-2"
        } else {
          stream.next();
          return
        }
      }

      if (state.sec === "rp") {
        if (state.after_equal && stream.match(new RegExp("^[_a-zA-Z][_a-zA-Z0-9]*"))) {
          return "property"
        }
      } else if (state.sec === "e") {
        if (stream.match("some") || stream.match("where") || stream.match("priority")) {
          return "keyword"
        }
        if (stream.match("allow") || stream.match("deny")) {
          return "builtin"
        }
        if (stream.match("sub") || stream.match("dom") || stream.match("obj") || stream.match("act") || stream.match("eft") || stream.match("Owner")) {
          return "property"
        }
      } else if (state.sec === "m") {
        if (stream.match("keyMatch2") || stream.match("keyMatch") || stream.match("regexMatch") || stream.match("ipMatch")) {
          return "def"
        }
        if (stream.match("sub") || stream.match("dom") || stream.match("obj") || stream.match("act") || stream.match("eft") || stream.match("Owner")) {
          return "property"
        }
      }

      stream.next();
    }

    return {
      startState: function () {
        return {tokenize: tokenBase};
      },
      token: function (stream, state) {
        return state.tokenize(stream, state);
      }
    };
  });
});
