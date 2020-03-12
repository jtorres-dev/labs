//Data: POST REQUEST KEYS
const formId = '1FAIpQLSfRK5cVCLZhRDVMG-JIEaqUanPhp_FTp5mePJrBJZh9Tjey4w';
const name = 'entry.1000000';
const message = 'entry.1000001';
const urlPOST = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

//Data: GET REQUESTS
let sheetId = '1MXW1slKXsDA3X73loZMzFuD__fVdeJxqCDj5GRk93Zk';
const key = 'AIzaSyCzO49ejexUPyQRxGInWer9gxNT5hSSv44';
const sheet = encodeURIComponent('Form Response 1');
const urlGET = `https://sheets.googleaps.com/v4/spreadsheets/${sheetId}/values/${sheet}?key-${key}`;