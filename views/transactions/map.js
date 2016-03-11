function(doc) {
  if (doc.type === 'transaction') {
    emit(null, doc);
  }
}
