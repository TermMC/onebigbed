import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Page() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data: users } = await supabase.from('users').select();

    return (
    
        <ul className='text-white'>
            <li>FIRST ITEM</li>
            {users?.map((user, index) => (
                <li key={index}>
                    <div>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                    <br />
                </li>
            ))}
        </ul>
    );
}