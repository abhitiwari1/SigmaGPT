// import Router from 'express';
// import Thread from '../model/Thread.js';
// import getDeepseekAIAPIResponse from '../utils/openai.js';

// const router = Router();

// router.post("/test", async(req, res) => {
//     try {
//         const thread = new Thread({
//             threadId: "xyz",
//             title: "Testing New Thread"
//         });

//         const response = await thread.save();
//         res.send(response);

//     } catch (error) {
//         return res.status(500).json({ error: "Something went wrong" });
//     }
// });

// router.get("threads", async(req, res) => {
//     try {
//         const threads = await Thread.find({}).sort({updatedAt: -1});
//         res.json(threads);

//     } catch (error) {
//         return res.status(500).json({ error: "Failed to fetch thread" });
//     }
// });

// router.get("/thread/:threadId", async(req, res) => {
//     const {threadId} = req.params;
//     try {
//         const thread = await Thread.findOne({threadId});
//         if(!thread){
//             return res.status(404).json({message: "Thread not found"});
//         }
//         res.send(thread.messages);
//     } catch (error) {
//         return res.status(500).json({ error: `Failed to fetch thread of threadId ${threadId}` });
//     }
// });

// router.delete("/thread/:threadId", async(req, res) => {
//     const {threadId} = req.params;
//     try {
//         const deletedThread = await Thread.findOneAndDelete({threadId});
//         if(!deletedThread){
//             return res.status(404).json({message: "Thread not found"});
//         }
//         return res.status(200).json({message: "Thread deleted successfully"});

//     } catch (error) {
//         return res.status(500).send({ error: "Error in deleting thread" });
//     }
// });

// router.post("/chat", async(req, res) => {
//     const {threadId, message} = req.body;

//     if(!threadId || !message){
//         return res.status(400).json({message: "missing required fields"});
//     }

//     try {
//         let thread = await Thread.findOne({threadId});
//         if(!thread){
//             thread = new Thread({
//                 threadId,
//                 title: message,
//                 messages: [{role: "user", content: message}]
//             });
//         }else{
//             thread.messages.push({role: "user", content: message});
//         }
//         const assistantReply = await getDeepseekAIAPIResponse(message);
//         thread.messages.push({role: "assistant", content: assistantReply});
//         thread.updatedAt = Date.now;
//         await thread.save();
//         res.json({reply: assistantReply});

//     } catch (error) {
//         return res.status(500).send({ error: "Something went wrong" });
//     }
// })


// export default router;