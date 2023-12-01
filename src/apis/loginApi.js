
export async function getUserData() {
    try {
      const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
      if (!response.ok) throw new Error();
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }