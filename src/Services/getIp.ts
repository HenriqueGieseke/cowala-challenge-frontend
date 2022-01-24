import axios from 'axios';

const getIp = async (event: React.MouseEvent, setMyIp: Function) => {
  event.preventDefault();
  try {
    const data = await axios.get('https://ip-fast.com/api/ip/');
    setMyIp(data.data);
  } catch (error) {
    console.log(error);
  }
};

export { getIp };
