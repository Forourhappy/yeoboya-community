import { FormField, useFormField } from '~/shared/ui/shadcn/form.tsx';
import { Form } from 'react-hook-form';

export const SignupPage = () => {
	const nameField = useFormField();
	return (
		<div>
			회원가입
			<Form>
				<FormField
					{...nameField}
					render={({ input, meta }) => (
						<div>
							<label htmlFor={input.id}>이름</label>
							<input {...input} />
							{meta.error && <div>{meta.error}</div>}
						</div>
					)}
				/>
			</Form>
		</div>
	);
};
