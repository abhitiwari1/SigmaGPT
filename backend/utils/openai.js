// import "dotenv/config"

// const getDeepseekAIAPIResponse = async (message) => {
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`
//         },
//         body: JSON.stringify({
//             model: "deepseek-chat",
//             messages: [
//                 {
//                     role: "user",
//                     content: message
//                 }
//             ]
//         })
//     };

//     try {
//         const response = await fetch("https://api.deepseek.com/chat/completions", options);

//         const data = await response.json();
//         return data.choices[0].message.content;
//     } catch (error) {
//         return res.status(500).json({ error: "Something went wrong" });
//     }
// }

// export default getDeepseekAIAPIResponse;