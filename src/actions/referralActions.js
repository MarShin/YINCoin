export const referrerExist = referralID => ({
  type: 'REFERRER_EXIST',
  isReferrerExist: true,
  referralID
});

export const referrerNotExist = () => ({
  type: 'REFERRER_NOT_EXIST',
  isReferrerExist: false
});
