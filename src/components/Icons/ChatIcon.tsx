import { cn } from '@/utils/cn';

const ChatIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			viewBox='0 0 21 19'
			xmlns='http://www.w3.org/2000/svg'
			className={cn('w-3 h-3 fill-none stroke-black stroke-2', className)}
	
		>
			<path
				d='M17.0769 1H3.92308C3.14783 1 2.40433 1.32565 1.85615 1.90531C1.30797 2.48496 1 3.27115 1 4.09091V11.8182C1 12.6379 1.30797 13.4241 1.85615 14.0038C2.40433 14.5834 3.14783 14.9091 3.92308 14.9091H11.9615L16.3462 18V14.9091H17.0769C17.8522 14.9091 18.5957 14.5834 19.1438 14.0038C19.692 13.4241 20 12.6379 20 11.8182V4.09091C20 3.27115 19.692 2.48496 19.1438 1.90531C18.5957 1.32565 17.8522 1 17.0769 1Z'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M7.42857 7.61579C7.42857 7.77911 7.35332 7.93574 7.21936 8.05122C7.08541 8.1667 6.90373 8.23158 6.71429 8.23158C6.52485 8.23158 6.34316 8.1667 6.20921 8.05122C6.07526 7.93574 6 7.77911 6 7.61579C6 7.45247 6.07526 7.29584 6.20921 7.18036C6.34316 7.06488 6.52485 7 6.71429 7C6.90373 7 7.08541 7.06488 7.21936 7.18036C7.35332 7.29584 7.42857 7.45247 7.42857 7.61579ZM11.7143 7.61579C11.7143 7.77911 11.639 7.93574 11.5051 8.05122C11.3711 8.1667 11.1894 8.23158 11 8.23158C10.8106 8.23158 10.6289 8.1667 10.4949 8.05122C10.361 7.93574 10.2857 7.77911 10.2857 7.61579C10.2857 7.45247 10.361 7.29584 10.4949 7.18036C10.6289 7.06488 10.8106 7 11 7C11.1894 7 11.3711 7.06488 11.5051 7.18036C11.639 7.29584 11.7143 7.45247 11.7143 7.61579ZM16 7.61579C16 7.77911 15.9247 7.93574 15.7908 8.05122C15.6568 8.1667 15.4752 8.23158 15.2857 8.23158C15.0963 8.23158 14.9146 8.1667 14.7806 8.05122C14.6467 7.93574 14.5714 7.77911 14.5714 7.61579C14.5714 7.45247 14.6467 7.29584 14.7806 7.18036C14.9146 7.06488 15.0963 7 15.2857 7C15.4752 7 15.6568 7.06488 15.7908 7.18036C15.9247 7.29584 16 7.45247 16 7.61579Z'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default ChatIcon;