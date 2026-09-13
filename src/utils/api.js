/**
 * Fetches the list of members from members.txt
 */
export const fetchMembers = async () => {
  try {
    const response = await fetch('/members.txt');
    const text = await response.text();
    const members = text
      .split('\n')
      .map(m => m.trim())
      .filter(m => m.length > 0);
    return members;
  } catch (error) {
    console.error('Error fetching members:', error);
    return [];
  }
};

/**
 * Fetches user data from GitHub
 * @param {string} username - GitHub username
 */
export const fetchUserData = async (username) => {
  try {
    const url = `https://raw.githubusercontent.com/${username}/kb/main/data.json`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data for ${username}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data for ${username}:`, error);
    return null;
  }
};

/**
 * Fetches data for all members
 */
export const fetchAllMembersData = async () => {
  try {
    const members = await fetchMembers();
    const membersData = {};
    
    for (const member of members) {
      const data = await fetchUserData(member);
      if (data) {
        membersData[member] = data;
      }
    }
    
    return membersData;
  } catch (error) {
    console.error('Error fetching all members data:', error);
    return {};
  }
};
