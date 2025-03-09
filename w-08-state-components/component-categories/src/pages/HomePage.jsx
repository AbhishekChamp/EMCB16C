import UserCard from "../components/UserCard";
import Counter from "../components/Counter";

const HomePage = () => {
    return (
        <div className='home-page'>
            <h1>Welcome to the Home Page</h1>

            {/* Example of Stateless Component */}
            <UserCard name='John Doe' email='john.doe@example.com' />
            <UserCard name='John' email='john@example.com' />

            {/* Example of Stateful Component */}
            <Counter initialCount={10} />
        </div>
    );
};

export default HomePage;
