// /app/page.tsx
'use client';

import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')


  const triggerWorkflow = async () => {
    setLoading(true);
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        email: email
      }),
    });
    const result = await response.json();
    setLoading(false);
    console.log(result);
  };
  return (
    <div>
      <h1>MJML Email with Novu Echo</h1>
      <input placeholder='Enter customer name' onChange={e => setText(e.target.value)} value={text} />
      <input placeholder='Enter customer email' onChange={e => setEmail(e.target.value)} value={email} />
      <button onClick={triggerWorkflow} disabled={loading}>
        {loading ? 'Sending...' : 'Send Email'}
      </button>
    </div>
  );
}
