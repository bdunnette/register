function(newDoc, oldDoc, userCtx, secObj) {
  function required(field, message) {
    message = message || "Document must have a " + field;
    if (!newDoc[field]) throw ({
      forbidden: message
    });
  };

  function unchanged(field) {
    if (oldDoc && toJSON(oldDoc[field]) != toJSON(newDoc[field]))
      throw ({
        forbidden: "Field can't be changed: " + field
      });
  };

  if (newDoc.transaction_type || newDoc.type === "transaction") {
    required("date");
  }
}
