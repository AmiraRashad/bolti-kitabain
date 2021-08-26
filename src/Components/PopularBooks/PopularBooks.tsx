import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './styles.css';
import SwiperCore, {
	EffectCoverflow,
	Pagination,
	Navigation,
} from 'swiper/core';
import useStyles from './styles';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const PopularBooks = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={5}>
					<Typography variant="h5" className={classes.mpb}>
						Most Popular Books
					</Typography>
				</Grid>
				<Grid item xs={2}>
					{}
				</Grid>
				<Grid item xs={4}>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search Here"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<br />
					<br />
				</Grid>
			</Grid>
			<div className="container">
				<Swiper
					effect="coverflow"
					slidesPerView={window.innerWidth < 768 ? 1 : 'auto'}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
					}}
					pagination={{
						clickable: true,
					}}
					className="mySwiper"
				>
					<SwiperSlide>
						<img src="./images/cover.jpeg" alt="number 1" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="./images/cover2.jpeg" alt="number 2" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="./images/cover3.jpeg" alt="number 3" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="../images/cover4.jpeg" alt="number 4" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="images/cover5.jpeg" alt="number 5" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="images/cover6.jpeg" alt="number 6" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};
export default PopularBooks;
