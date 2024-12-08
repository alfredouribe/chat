import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ChatLayout from '@/Layouts/ChatLayout';
import { Head } from '@inertiajs/react';

function Home() {
    return (
        <>
            Messages
        </>
    );
}

Home.layout = (page) => {
    return (
        <AuthenticatedLayout user = {page.props.auth.user} >
            <ChatLayout children = {page}></ChatLayout>
        </AuthenticatedLayout>
    )
}

export default Home

// This process is called "persistent layout" the documentation can be found in inertiajs