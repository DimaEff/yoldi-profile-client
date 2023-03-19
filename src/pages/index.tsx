import { Avatar } from "antd";

import Box from "@/shared/ui/Box";
import Button from "@/shared/ui/Button";
import Paragraph from "@/shared/ui/Typography/Paragraph";
import Input from "@/shared/ui/Input/Input";

const Home = () => {
    return (
        <Box colorType="bg_secondary">
            <div>
                <Button
                    style={{ lineHeight: "160%", width: "100%" }}
                    type="primary"
                >
                    123
                </Button>
            </div>
            <Input />
            {/* <Title>Title</Title> */}
            {/* <Subtitle>Subtitle</Subtitle> */}
            {/* <Paragraph>Paragraph</Paragraph> */}
            <Paragraph mini>Mini</Paragraph>
            {/* <div> */}
            {/*     <Avatar>D</Avatar> */}
            {/* </div> */}
        </Box>
    );
};

export default Home;
