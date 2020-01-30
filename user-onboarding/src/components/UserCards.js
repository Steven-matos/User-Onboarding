import React from 'react';

const UserCards = ({users}) => {
    return (
        <div>
            {users.map(users => {
                return (
                    <div key={users.id}>
                        <h1>Profile Created</h1>
                        <h2>Name: {users.name}</h2>
                        <p>Email: {users.email}</p>
                        <p>Password: {users.password.length} Characters Long!</p>
                    </div>
                );
            })}
        </div>
    );
};

export default UserCards;