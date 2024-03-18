import { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectPage = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            const response = await axios.get('https://api.github.com/users/zhangshengshan/repos');
            setRepos(response.data);
        };

        fetchRepos();
    }, []);

    return (
        <div>
            {/* Other components */}

            <h2>My GitHub Projects</h2>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Other components */}
        </div>
    );
};

export default ProjectPage;