//JSON.Stringify
if (!JSON.stringify) {
  JSON.stringify = function (value, replacer, space) {
    // Handle undefined and functions
    if (typeof value === "undefined" || typeof value === "function") {
      return undefined;
    }

    // Handle null
    if (value === null) {
      return "null";
    }

    // Handle strings
    if (typeof value === "string") {
      return '"' + value + '"';
    }

    // Handle numbers, booleans, and symbols
    if (typeof value !== "object") {
      return String(value);
    }

    // Handle arrays
    if (Array.isArray(value)) {
      const arr = value.map(function (element) {
        return JSON.stringify(element, replacer, space);
      });
      return "[" + arr.join(",") + "]";
    }

    // Handle objects
    const obj = [];
    Object.keys(value).forEach(function (key) {
      const val = JSON.stringify(value[key], replacer, space);
      if (val !== undefined) {
        obj.push('"' + key + '":' + val);
      }
    });
    return "{" + obj.join(",") + "}";
  };
}

//JSON.Parse
if (!JSON.parse) {
  JSON.parse = function (jsonString) {
    // Remove leading and trailing whitespaces
    jsonString = jsonString.trim();

    // Handle empty string
    if (jsonString === "") {
      throw new SyntaxError("Unexpected end of JSON input");
    }

    // Check for valid JSON format using a regular expression
    if (
      /^[\],:{}\s]*$/.test(
        jsonString
          .replace(/\\["\\\/bfnrtu]/g, "@")
          .replace(
            /"[^"\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            "]"
          )
          .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
      )
    ) {
      // Use the native JSON.parse if available
      if (window.JSON && typeof window.JSON.parse === "function") {
        return window.JSON.parse(jsonString);
      }

      // Otherwise, use eval to parse the JSON string
      return eval("(" + jsonString + ")");
    }

    throw new SyntaxError("Invalid JSON");
  };
}
