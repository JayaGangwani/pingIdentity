export const getCartData = async () => {
  let data = []
  try {
    let resp = await fetch("http://localhost:8085/food", {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      },
    })
    data = await resp.json();
  }
  catch (error) {
    console.error(error)
  }
  return data
}