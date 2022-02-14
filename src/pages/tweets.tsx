import { NextPage } from "next";
import useSWR from "swr";
import http from "../utils/http";
import { Tweet } from "../utils/models";
import { Title } from "../components/Title";
import Image from "next/image";

const fetcher = (url: string) => http.get(url).then((res) => res.data);

const TweetsPage: NextPage = () =>  {

    const {data: tweets} = useSWR<Tweet[]>('tweets', fetcher);

    return (
        <>
            <Title>Tweets</Title>
            {tweets?.map((t, key) => (
                <div key={key}>
                    <div className="h-10 w-10 relative">
                        <Image className="roundad-full" src={t.User.BiggerProfileImageURLHttps} alt="" layout="fill" objectFit="cover" />
                    </div>
                    <div>

                    </div>
                </div>
            ))}
        </>
    );
};

export default TweetsPage;