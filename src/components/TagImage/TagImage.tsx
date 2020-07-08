import React from "react";
import { Tags } from "./types";

export default function TagImage({ name }: { name: string }) {
	const tags: Tags = {
		javascript:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
		html:
			"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
		angular:
			"https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
		ionic:
			"https://cdn-images-1.medium.com/max/1000/1*ZU1eWct801yP-QpUJOaI6Q.png",
		typescript:
			"https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png",
		php:
			"https://3.bp.blogspot.com/-e6IQB8pglII/XJPv-knf5aI/AAAAAAAAJRA/GMaKgRLlKvs_CxVQdhYN4ffeN5XCIBq1ACK4BGAYYCw/s1600/logo%2Bphp%2Bicon.png",
		java:
			"https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
		react:
			"https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg",
		spring: "https://i.ya-webdesign.com/images/spring-logo-png-6.png",
	};

	return <img style={{ width: 30 }} src={tags[name]} alt={name} />;
}
