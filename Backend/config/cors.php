<?php
return [
	'paths' => ['api/*'],
	'allowed_methods' => ['*'],
	'allowed_origins' => ['http://localhost:5174'], // Adjust this to your frontend origin
	'allowed_headers' => ['*'],
	'exposed_headers' => [],
	'max_age' => 0,
	'supports_credentials' => false,
];
