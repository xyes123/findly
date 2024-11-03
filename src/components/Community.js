// src/components/Community.js
import React, { useState } from 'react';
import './Community.css';

const initialThreads = [
  {
    id: 1,
    title: 'How to identify your lost items?',
    content: 'I recently lost my keys, any tips on how to retrieve them?',
    comments: [],
  },
  {
    id: 2,
    title: 'Found a wallet in Central Park',
    content: 'I found a wallet near the fountain. Please let me know if it’s yours!',
    comments: [],
  },
];

function Community() {
  const [threads, setThreads] = useState(initialThreads);
  const [newThread, setNewThread] = useState({ title: '', content: '' });
  const [currentComments, setCurrentComments] = useState({});

  const handleCreateThread = (e) => {
    e.preventDefault();
    if (newThread.title && newThread.content) {
      const newId = threads.length + 1;
      setThreads([...threads, { ...newThread, id: newId, comments: [] }]);
      setNewThread({ title: '', content: '' });
    }
  };

  const handleCommentChange = (threadId, value) => {
    setCurrentComments({ ...currentComments, [threadId]: value });
  };

  const handleAddComment = (threadId) => {
    const threadIndex = threads.findIndex(thread => thread.id === threadId);
    const updatedThreads = [...threads];
    const comments = currentComments[threadId] || '';
    if (comments) {
      updatedThreads[threadIndex].comments.push(comments);
      setThreads(updatedThreads);
      setCurrentComments({ ...currentComments, [threadId]: '' });
    }
  };

  return (
    <div className="community">
      <h2>Community Discussions</h2>
      <form onSubmit={handleCreateThread} className="new-thread-form">
        <input
          type="text"
          placeholder="Thread Title"
          value={newThread.title}
          onChange={(e) => setNewThread({ ...newThread, title: e.target.value })}
          required
        />
        <textarea
          placeholder="What do you want to discuss?"
          value={newThread.content}
          onChange={(e) => setNewThread({ ...newThread, content: e.target.value })}
          required
        />
        <button type="submit">Create Thread</button>
      </form>

      <div className="threads">
        {threads.map((thread) => (
          <div key={thread.id} className="thread">
            <h3>{thread.title}</h3>
            <p>{thread.content}</p>
            <div className="comments">
              {thread.comments.map((comment, index) => (
                <div key={index} className="comment">
                  <p>{comment}</p>
                </div>
              ))}
              <input
                type="text"
                placeholder="Add a comment..."
                value={currentComments[thread.id] || ''}
                onChange={(e) => handleCommentChange(thread.id, e.target.value)}
              />
              <button onClick={() => handleAddComment(thread.id)}>Comment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;
