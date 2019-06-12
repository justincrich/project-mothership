const LEADERS_KEY = 'leaders';
export const FIREBASE_COLLECTIONS = {
  LEADER: id => `${LEADERS_KEY}/${id}`,
  LEADERS: () => LEADERS_KEY,
};

export const STORAGE_FOLDERS = {
  LEADER_IMAGES: 'leader_images',
  PROFILE_IMAGES: 'profile_images',
};
