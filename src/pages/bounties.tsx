import Header from "../library/header";

const Bounties = (props: any) => {
    const { page } = props;
    const { title } = page;
    return (
        <Header content={title} />
    )
};

export default Bounties;