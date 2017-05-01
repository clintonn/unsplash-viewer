import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';



export default () => {
	return (
		<div class={style.header}>
			<div class={style.header__icon}>
				<a href="/">
					<span class={style.header__icon_spanner}>
					</span>
				</a>
			</div>
			<nav class={style.header__nav}><ul>
				<li><a href="/">Latest</a></li>
				<li><a href="/random">Random</a></li>
				<li><a href="/curated">Curated</a></li>
			</ul></nav>
		</div>
	)
}
