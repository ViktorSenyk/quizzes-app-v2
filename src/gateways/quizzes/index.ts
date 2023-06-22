export const fetchSelectedQuizzes = (url: string) =>
  fetch(`${url}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('server error');
      }
      return res.json();
    })
    .catch(err => alert(err));
