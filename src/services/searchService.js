import * as httpRequest from '~/utils/httpRequest';

export const search = async (p, type = 'less') => {
  try {
    const res = await httpRequest.get('users/search', {
      param: {
        p,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
