export const fetchSelectedQuizzes = (url: string): Promise<any> =>
  fetch(`${url}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('server error');
      }
      return res.json();
    })
    .catch((err: Error) => alert(err));
