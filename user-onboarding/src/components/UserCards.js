import React from 'react';
import {Card} from './StyledComponents';

const UserCards = ({users}) => {
    return (
        <div>
            {users.map(users => {
                return (
                    <Card key={users.id}>
                        <h1>Profile Created</h1>
                        <h2>{users.name}</h2>
                        <p>Email: {users.email}</p>
                        <p>Password: {users.password.length} Characters Long!</p>
                    </Card>
                );
            })}
        </div>
    );
};

export default UserCards;