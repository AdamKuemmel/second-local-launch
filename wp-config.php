<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '8AhaGlwKvWlrZnDrZcrtqXYWVy/GpqF3hJbEnmDgrOohgM6qEoA6VQjH4bABr//+ysusdTpTwGSYKhILDbi/zg==');
define('SECURE_AUTH_KEY',  'i7DIftzQOj6A0Z/a2cK6zvCQE4OU21aVOcBmlhv8z/qKgCLmJ9o6tX+37TDMQAEminAdskRpv/m51YQQ/snlqw==');
define('LOGGED_IN_KEY',    'qaPoYhvtrQKbak/GShXnvPJWGLsmz4fRDGtKJKIFfw4MZvBUa9pVIKodmrkpbkJd9Z1VJKgI3xHjIU4nEBzL2A==');
define('NONCE_KEY',        'Sf/1GloEvuuQt6/2TnjbMdxGotXvuAw97J3abDo0OL0pyrxy14R70RYT9ijmdrWfCxaNuVen0ROV8xTLQnAK4g==');
define('AUTH_SALT',        '9eLwe2Ro8B2GLAhfdKxBJg3qb4ru3cOz2uIgjEIsFCvEAx7YcrooZU8vituLvV/yXaOyQXm5BHz4LRf+v5NMIQ==');
define('SECURE_AUTH_SALT', 'fXJxYWZ5qImkhgvyCgzSprXEdW7cg7xeIdE4cmy3KUwdyoUl08LPhx4i/iq9pSm0ZsgsyhEpqcMW4OMU8RJ2mQ==');
define('LOGGED_IN_SALT',   'xnXBvlura1w4dccEuFfyVpRg4MvnLNx+53MY/9t8of+TE1++O/aqbFy2he1pM3UAwdcHySY0d9ihEgxs+XOJgQ==');
define('NONCE_SALT',       '6avnrUQa7ZlIOEqQYCtym5nz80yo8x99e/Bg36J7U4twt2ld22bdIehZEEcciPCujyTTu+7Y6ERk4MCM+4wnag==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
