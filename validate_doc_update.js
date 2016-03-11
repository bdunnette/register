function(newDoc, oldDoc, userCtx, secObj) {
  function require(field, message) {
    message = message || "Document must have a " + field;
    if (!newDoc[field]) throw({forbidden : message});
  };

  if (newDoc.transaction_type || newDoc.type === "transaction") {
    require("date");
  }
}
