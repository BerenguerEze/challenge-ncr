const GetData = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_endpoint_api);
      const jsonData = await response.json(); 
      return jsonData; 
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      return null;
    }
  };
  
  export default GetData;