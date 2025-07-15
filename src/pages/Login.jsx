import { SignIn } from '@clerk/clerk-react';
import React from 'react';

export default function Login() {
	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
		</div>
	);
}
