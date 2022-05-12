let videos = [
    {
        title: "First Video",
        rating: 1,
        comments: 2,
        createdAt: "1분전..",
        views: 1,
        id: 1,
    },
    {
        title: "Second Video",
        rating: 2,
        comments: 2,
        createdAt: "2분전..",
        views: 10000,
        id: 2,
    },
    {
        title: "Third Video",
        rating: 3,
        comments: 2,
        createdAt: "3분전..",
        views: 10000,
        id: 3,
    },
];


//global
export const trending_home = (req,res) => {
   return res.render("home", { pageTitle: "Home", videos})
};

//video
export const watch = (req,res) => {
    const id = req.params.id;
    const video = videos[id-1];
    return res.render("watch", { pageTitle: `Watching ${video.title}`, video});
};
export const getEdit = (req,res) => {
    const id = req.params.id;
    const video = videos[id-1];
    return res.render("edit", { pageTitle: `Edit Video:  ${video.title}`,video });
 };
export const postEdit = (req,res) => {
    const id = req.params.id;     // const {id} = req.id
    const title = req.body.title; // const {title} = req.body
    videos[id-1].title = title;
    return res.redirect(`/videos/${id}`);
};
export const getUpload = (req,res) => {
    const id = req.params.id;
    const video = videos[id-1];
    return res.render("upload.pug", { pageTitle: `Upload Video: ` });
};
export const postUpload = (req,res) => {
    const{title} = req.body;
    const newVideo =     {
        title,
        rating: 0,
        comments: 0,
        createdAt: "10분전..",
        views: 1,
        id: videos.length + 1,
    }
    videos.push(newVideo);
    return res.redirect(`/`);
};