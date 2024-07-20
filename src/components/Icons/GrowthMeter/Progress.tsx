import { cn } from '@/utils/cn';
import React from 'react';

const Progress = ({ className }: { className?: string }) => {
	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='30.096'
				height='30.005'
				className='md:hidden'
			>
				<path
					d='M 20.517 18.75 L 17.415 21.853 C 17.471 22.064 17.5 22.281 17.5 22.5 C 17.5 23.881 16.381 25 15 25 C 13.619 25 12.5 23.881 12.5 22.5 C 12.5 21.119 13.619 20 15 20 C 15.224 20 15.441 20.03 15.647 20.085 L 18.75 16.983 L 18.75 13.75 L 22.5 10 L 22.5 15 L 27.5 15 L 23.75 18.75 Z M 6.349 27.5 L 2.5 27.5 L 2.5 12.5 L 16.465 12.5 L 18.965 10 L 2.5 10 L 2.5 6.25 C 2.5 5.56 3.061 5 3.75 5 L 26.25 5 C 26.939 5 27.5 5.56 27.5 6.25 L 27.515 10 L 25 10 L 25 12.5 L 30.025 12.5 L 30 6.245 C 29.997 4.179 28.316 2.5 26.25 2.5 L 22.5 2.5 L 22.5 0 L 20 0 L 20 2.5 L 10 2.5 L 10 0 L 7.5 0 L 7.5 2.5 L 3.75 2.5 C 1.683 2.5 0 4.183 0 6.25 L 0 30 L 8.401 30 C 7.586 29.283 6.893 28.439 6.349 27.5 Z M 22.238 20.565 L 19.965 22.836 C 19.787 25.434 17.641 27.499 14.999 27.499 C 12.241 27.499 9.999 25.256 9.999 22.499 C 9.999 19.856 12.064 17.71 14.661 17.533 L 16.934 15.26 C 16.315 15.095 15.669 14.997 14.999 14.997 C 10.863 14.997 7.499 18.361 7.499 22.497 C 7.499 26.634 10.863 29.997 14.999 29.997 C 19.135 29.997 22.499 26.634 22.499 22.497 C 22.499 21.827 22.402 21.181 22.236 20.563 Z M 30.096 29.995 L 30.04 15.996 L 27.55 18.486 L 27.586 27.5 L 23.651 27.5 C 23.107 28.439 22.414 29.283 21.599 30 L 27.596 30 L 27.596 30.005 Z'
					fill='rgb(48,42,57)'
				></path>
			</svg>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='52'
				height='52'
				className='max-md:hidden'
			>
				<g>
					<path
						d='M 0 0 L 52 0 L 52 52 L 0 52 Z'
						fill='transparent'
					></path>
					<path
						d='M 35.564 32.5 L 30.186 37.878 C 30.284 38.244 30.333 38.621 30.333 39 C 30.333 41.394 28.394 43.333 26 43.333 C 23.606 43.333 21.667 41.394 21.667 39 C 21.667 36.606 23.606 34.667 26 34.667 C 26.388 34.667 26.765 34.719 27.122 34.814 L 32.5 29.436 L 32.5 23.833 L 39 17.333 L 39 26 L 47.667 26 L 41.167 32.5 Z M 11.005 47.667 L 4.333 47.667 L 4.333 21.667 L 28.539 21.667 L 32.873 17.333 L 4.333 17.333 L 4.333 10.833 C 4.333 9.637 5.306 8.667 6.5 8.667 L 45.5 8.667 C 46.694 8.667 47.667 9.637 47.667 10.833 L 47.693 17.333 L 43.333 17.333 L 43.333 21.667 L 52.043 21.667 L 52 10.825 C 51.996 7.243 49.082 4.333 45.5 4.333 L 39 4.333 L 39 0 L 34.667 0 L 34.667 4.333 L 17.333 4.333 L 17.333 0 L 13 0 L 13 4.333 L 6.5 4.333 C 2.916 4.333 0 7.25 0 10.833 L 0 52 L 14.562 52 C 13.15 50.758 11.948 49.294 11.005 47.667 Z M 38.545 35.646 L 34.606 39.583 C 34.298 44.085 30.578 47.665 25.998 47.665 C 21.218 47.665 17.331 43.778 17.331 38.998 C 17.331 34.418 20.91 30.697 25.413 30.39 L 29.352 26.451 C 28.279 26.165 27.159 25.996 25.998 25.996 C 18.828 25.996 12.998 31.826 12.998 38.996 C 12.998 46.165 18.828 51.996 25.998 51.996 C 33.167 51.996 38.998 46.165 38.998 38.996 C 38.998 37.834 38.831 36.714 38.543 35.642 Z M 52.167 51.991 L 52.069 27.727 L 47.753 32.043 L 47.816 47.667 L 40.995 47.667 C 40.052 49.294 38.85 50.758 37.438 52 L 47.834 52 L 47.834 52.009 Z'
						fill='rgb(48,42,57)'
					></path>
				</g>
			</svg>
		</>
	);
};

export default Progress;
