export const filter_GQL_Error = (error: any) => {
  let error_string = error ? error[0].message : 'Error';
  let error_arr: any[] = error_string
    .replace('(', '')
    .replace(')', '')
    .replaceAll('"', '')
    .split(',');
  return error_arr.length > 1 ? error_arr[1] : error_arr[0];
};
