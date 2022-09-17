import Header from "../library/header";

const Intro = (props: any) => {
    const { page } = props;
    const { title } = page;
    return (
        <Header content={title} />
    );
};

export default Intro;