
let videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 1,
        id: 1, 
    },
    {
        title: "Second Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 2, 
    },
    {
        title: "Third Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 3, 
    }
];

export const trending = (req, res) => {
    res.render("home", {pageTitle: "HOME", videos});
}
export const watch = (req, res) => {
    const id = req.params.id; // const { id } = req.params
    const video = videos[id - 1]
    console.log("SHOW VIDEO", id);
    res.render("watch", {pageTitle: `watching ${video.title}`, video});
}
export const getEdit = (req, res) => {
    const id = req.params.id; // const { id } = req.params
    const video = videos[id - 1]
    res.render("edit", {pageTitle: `editing ${video.title}`, video});
};

export const postEdit = (req, res) => {};

export const search = (req, res) => res.send("Search");