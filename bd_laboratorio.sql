-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-05-2022 a las 07:18:17
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_laboratorio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comic`
--

CREATE TABLE `comic` (
  `id_comic` int(11) NOT NULL,
  `titulo` varchar(70) NOT NULL,
  `descripcion` varchar(700) NOT NULL,
  `autor` varchar(40) NOT NULL,
  `artista` varchar(40) NOT NULL,
  `imagen` varchar(400) NOT NULL,
  `genero` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comic`
--

INSERT INTO `comic` (`id_comic`, `titulo`, `descripcion`, `autor`, `artista`, `imagen`, `genero`) VALUES
(1, '     Edición hecha', 'Prueba exitosa', 'Kiran', 'Kiran', 'https://sevenseasentertainment.com/wp-content/uploads/2021/10/wednesdaylicensesevent_NEW.jpg', 'Vida real');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `manga`
--

CREATE TABLE `manga` (
  `id_manga` int(11) NOT NULL,
  `titulo` varchar(70) NOT NULL,
  `descripcion` varchar(700) NOT NULL,
  `autor` varchar(40) NOT NULL,
  `artista` varchar(40) NOT NULL,
  `imagen` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `manga`
--

INSERT INTO `manga` (`id_manga`, `titulo`, `descripcion`, `autor`, `artista`, `imagen`) VALUES
(5, 'Devilman Grimoire', 'When demons begin taking over the bodies of humans, only the strongest survive. When a practicing young witch named Miki Makimura asks her friend Akira Fudo for help with a ritual, the spell is interrupted and Akira is left on the brink of death. His body is overtaken by a powerful being named Amon. Now torn between his humanity and the demon within him, Akira uses his abilities to fight in the war between demons and humans for the future of the world itself!', 'Go Nagai', 'Rui Takato', '1648494114556-devilmanG-banner.jpg'),
(6, 'High-Rise Invasion', 'On the roof of a high-rise building, a young girl named Yuri witnesses a masked figure split a man’s head open with an axe! It’s not exactly an everyday occurrence for a high schooler, but things only get weirder from there. Yuri soon finds herself in a strange world of skyscrapers with only two options for escape—fight past the mysterious masked figures or leap to her death!', 'Tsuina Miura', 'Takahiro Oba', '1650336168941-siteheader_highrise_864x300.jpg'),
(7, 'Dai Dark', 'Zaha Sanko’s body has great and terrible powers–they say that possessing his bones will grant you any wish, even the desire to become ruler of the universe. But Sanko is still a teenage dude with his own life, and he isn’t about to let every monstrous lowlife in the galaxy rip him limb from limb. He and his skeletal buddy Avakian will use their dark powers to fend off any murder attempts while they search space for whomever put this curse on Sanko’s bones…because killing them might end the madness. (And then Sanko can celebrate with his favorite spaghetti.)', 'Q Hayashida', 'Q Hayashida', '1650336208944-siteheader_dai-dark_864x300.jpg'),
(8, 'Servamp', 'When a stray black cat named Kuro crosses Mahiru Shirota’s path, the high school freshman’s life will never be the same again. Kuro is, in fact, no ordinary feline, but a servamp: a servant vampire. While Mahiru’s personal philosophy is one of non-intervention, he soon becomes embroiled in an ancient, altogether surreal conflict between vampires and humans.', 'Strike Tanaka', 'Strike Tanaka', '1651381504179-servamp.jpg'),
(9, 'My Status as an Assassin Obviously Exceeds the Hero', 'When Akira’s class is magically summoned to another world, he and his classmates are awarded fantastical powers–but while one of them is lucky enough to become a true Hero, Akira becomes a mere Assassin. However, against all odds, the Assassin just might be the most powerful role of all! Harboring doubts about the intentions of the king, Akira uses his newfound strength as a master of the shadows to uncover the secrets and conspiracies of the crown.', 'Matsuri Akai', 'Hiroyuki Aigamo', '1651382036439-siteheader_assassincolor_864x300.jpg'),
(10, 'he Saviors Book Café Story in Another World', 'Tsukina is a single, thirty-something office worker whose favorite thing is curling up with a good book. When a god tells her that she must go to another world to become its magical savior, Tsukina isn’t interested. She has zero desire to go on some grand hero’s journey. So when she arrives in this strange new land, she decides to use her magical powers to create a cozy little book café instead. Her first customer is a handsome soldier who loves reading almost as much as she does. But when a fellow “savior” starts causing trouble, Tsukina might have to play the hero after all!', 'Kyouka Izumi', 'Reiko Sakurada', '1651382122588-siteheader_bookcafestory_864x300.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novela`
--

CREATE TABLE `novela` (
  `id_novela` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(1500) NOT NULL,
  `autor` varchar(70) NOT NULL,
  `artista` varchar(70) NOT NULL,
  `imagen` varchar(400) NOT NULL,
  `isbn` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `novela`
--

INSERT INTO `novela` (`id_novela`, `titulo`, `descripcion`, `autor`, `artista`, `imagen`, `isbn`) VALUES
(1, 'Reborn as a Space Mercenary', 'When Satou Takahiro is swept away from his ordinary life into the world of his favorite video game, a universe of space battles, interstellar colonies, and danger in the vastness of outer space awaits. Soon, he’s living as “Hiro” the mercenary, with a tricked-out spaceship and a babe on each arm! There are space pirates to fight, girls to rescue, and trouble to get into (and hopefully out of). Hiro is going to live his new life to the fullest!', 'Ryuto', 'Tetsuhiro Nabeshima', 'https://sevenseasentertainment.com/wp-content/uploads/2021/06/siteheader_space_mercenaryLN_864x300.jpg', '978-1-64827-420-6'),
(2, 'The Saint’s Magic Power is Omnipotent', 'Could workaholic office lady Sei be a legendary Saint? Not according to the crown prince of another world who summoned her and quickly declared a different girl was the real Saint! That suits Sei just fine—she would much rather spend her days quietly helping people with her unbelievably powerful magic. But how long can Sei live her ideal life of leisure before her true nature is revealed?', 'Yuka Tachibana', 'Yasuyuki Syuri', 'https://sevenseasentertainment.com/wp-content/uploads/2020/09/siteheader_saintomnipotent_864x300.jpg', '978-1-64505-850-2'),
(3, 'The Husky and His White Cat Shizun: Erha He Ta De Bai Mao Shizun', 'Massacring his way to the top to become emperor of the cultivation world, Mo Ran’s cruel reign left him with little satisfaction. Now, upon suffering his greatest loss, he takes his own life…\r\n\r\nTo his surprise, Mo Ran awakens in his own body at age sixteen, years before he ever began his bloody conquests. Now, as a novice disciple at the cultivation sect known as Sisheng Peak, Mo Ran has a second chance at life. This time, he vows that he will attain the gratification that eluded him in his last life: the overly righteous shall fall, and none will dare treat him like a dog ever again! His furious passion burns most fiercely for his shizun, Chu Wanning, the beautiful yet cold cultivation teacher who maintains a cat-like aloofness in his presence. Yet despite Mo Ran’s shameless pursuit of his own goals, he begins to question his previously held beliefs, and wonders if there could be more to his teacher–and his own feelings–than he ever realized.', 'Rou Bao Bu Chi Rou', 'Rou Bao Bu Chi Rou', 'https://sevenseasentertainment.com/wp-content/uploads/2019/11/ss_nocover_header.jpg', '978-1-63858-929-7'),
(4, 'The Scum Villain’s Self-Saving System: Ren Zha Fanpai Zijiu Xitong', 'Half-demon Luo Binghe rose from humble beginnings and a tortured past to become unrivaled in strength and beauty. With his harem of over three hundred wives, and dominion over both the human and demonic realms, he is truly the most powerful protagonist—in a trashy web novel series!\r\n\r\nAt least, that’s what Shen Yuan, online alias “Peerless Cucumber,” believes as he finishes reading the final chapter in Proud Immortal Demon Way. But when a combination of rage and a poor meal choice leads to his death, Shen Yuan finds himself reborn into the world of the web novel, in the body of Shen Qingqiu—the beautiful but cruel teacher to a young Luo Binghe. Although as Shen Qingqiu, he now has incredible power and abilities as a cultivator, he’s destined to be horrifically punished for crimes against the protagonist, so this new Shen Qingqiu has only one course of action: get into Luo Binghe’s good graces before the young man’s rise to power. That’s the only way he’ll escape the awful fate of a true scum villain!', 'Mo Xiang Tong Xiu', 'Mo Xiang Tong Xiu', 'https://sevenseasentertainment.com/wp-content/uploads/2021/11/MXTX-index-SV.jpg', '978-1-64827-921-8'),
(5, 'At Night, I Become a Monster', 'By day, Adachi is a normal student. By night, he’s a terrifying creature of many eyes and many legs who lurks in the darkness. One night, while haunting his own school, he comes across his classmate Yano Satsuki–she’s been an unexpected victim of bullying, and stalking the night in her own way. He’s surprised to find himself developing a sympathetic relationship with her. In this supernatural novel about nighttime outcasts, two students confront the monstrous ways that humans can treat each other.\r\n\r\n“Overall At Night, I Become a Monster is a fascinating read. It’s a mystical story…just as captivating as Yoru Sumino’s I Want to Eat Your Pancreas. A must-read for fans of the author and supernatural dramas!” —Anime UK News', 'Yoru Sumino', 'Yoru Sumino', 'https://sevenseasentertainment.com/wp-content/uploads/2019/12/siteheader_atnightmonster_864x300.jpg', '978-1-64505-297-5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `username` varchar(40) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `email`, `username`, `password`, `created_at`) VALUES
(1, 'Kiran Strom', 'kiran_S@gmail.com', 'KiranDown', '123', '2022-03-22'),
(8, 'Karen', 'aklb20@gmail.com', 'Kiran.0', '$2a$12$7GFOvxgmmXY13S.l2R.XmeFj3hB3reyn0d3HuIAXfUqlLi4nrlrRq', '2022-04-15'),
(10, 'Kiran Strom', 'kr0str@gmail.com', 'KiranDownS', '$2a$12$Ixvf.YENL0jWAClG6fo.2uJdrWphXc/cSfoSYFEBa2pWrQBYtJ39O', '2022-04-15');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comic`
--
ALTER TABLE `comic`
  ADD PRIMARY KEY (`id_comic`);

--
-- Indices de la tabla `manga`
--
ALTER TABLE `manga`
  ADD PRIMARY KEY (`id_manga`);

--
-- Indices de la tabla `novela`
--
ALTER TABLE `novela`
  ADD PRIMARY KEY (`id_novela`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comic`
--
ALTER TABLE `comic`
  MODIFY `id_comic` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `manga`
--
ALTER TABLE `manga`
  MODIFY `id_manga` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `novela`
--
ALTER TABLE `novela`
  MODIFY `id_novela` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
