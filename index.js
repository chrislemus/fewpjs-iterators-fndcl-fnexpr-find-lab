
function superbowlWin(records) {
  const wonRecord = records.find(record => record.result === 'W');
  return wonRecord ? wonRecord.year : wonRecord
}