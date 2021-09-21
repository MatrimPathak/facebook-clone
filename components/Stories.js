import { useSession } from "next-auth/client";
import StoryCard from "./StoryCard";

const stories = [
    {
        id: "222",
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        id: "333",
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
    },
    {
        id: "444",
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
    },
    {
        id: "555",
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
];

function Stories() {
    const [session, loading]=useSession();
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            <StoryCard name={session.user.name} profile={session.user.image} src={stories[0].src}/>
            {stories.map((story) => (
                <StoryCard key={story.id} name={story.name} src={story.src} profile={story.profile}/>
            ))}
        </div>
    );
}

export default Stories
