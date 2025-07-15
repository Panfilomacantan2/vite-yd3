import { SignUp } from '@clerk/clerk-react';
import React from 'react';

export default function Signup() {
	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
		</div>
	);
}
