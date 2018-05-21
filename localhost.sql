-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 05 月 21 日 00:38
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `yanglihao`
--
CREATE DATABASE `yanglihao` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `yanglihao`;

-- --------------------------------------------------------

--
-- 表的结构 `cainixihuan`
--

CREATE TABLE IF NOT EXISTS `cainixihuan` (
  `sid` tinyint(4) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 NOT NULL,
  `img` varchar(250) NOT NULL,
  `price` varchar(20) NOT NULL,
  `sales` int(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `cainixihuan`
--

INSERT INTO `cainixihuan` (`sid`, `title`, `img`, `price`, `sales`) VALUES
(1, '欧洲站夏季男士韩版修身圆领短袖T恤潮流打底衫半袖体恤衣服男装T', 'https://img.alicdn.com/bao/uploaded/i3/1907163214/TB2MFzXhFuWBuNjSszbXXcS7FXa_!!1907163214.jpg_200x200q90.jpg_.webp', '88', 1988),
(2, '麻辣片豆皮豆腐皮80后怀旧儿时零食辣条500g湖南重庆手撕香辣小吃', 'https://img.alicdn.com/bao/uploaded/i3/2405192066/TB2ROLFcKSSBuNjy0FlXXbBpVXa_!!2405192066.jpg_200x200q90.jpg_.webp', '24.8', 2418),
(3, '苏微黑米锅巴粗粮锅巴休闲热卖零食500克 孜然/香辣/牛排包邮', 'https://img.alicdn.com/bao/uploaded/i3/353211277/TB29d_7rVXXXXavXXXXXXXXXXXX_!!353211277.jpg_200x200q90.jpg_.webp', '17.8', 10),
(4, '刻字保温杯定制logo定做水杯纪念礼品杯印字', 'https://img.alicdn.com/bao/uploaded/i4/159090336169350142/TB2IRhzX0XnpuFjSZFoXXXLcpXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', '39', 17),
(5, '意大利进口莫奈瑞浓稠黑醋调味汁 浓缩黑醋酱调味汁500ml', 'https://img.alicdn.com/bao/uploaded/i3/2236370042/TB2ET6cortlpuFjSspfXXXLUpXa_!!2236370042.jpg_200x200q90.jpg_.webp', '95', 1),
(6, '夏季男士短袖t恤圆领2018新款韩版潮流修身半袖白色体恤男装衣服', 'https://img.alicdn.com/bao/uploaded/i1/2750706321/TB2OP8egf5TBuNjSspmXXaDRVXa_!!2750706321.jpg_200x200q90.jpg_.webp', '68', 10032),
(7, '夏季日系印花五分袖男短袖T恤潮流拼色打底衫宽松oversize半袖男t', 'https://img.alicdn.com/bao/uploaded/i1/419509787/TB2xiyToXuWBuNjSspnXXX1NVXa_!!419509787.jpg_200x200q90.jpg_.webp', '68', 8298),
(8, '2018新款五分短袖T恤男ins潮流印花嘻哈半袖韩版原宿情侣装短袖男', 'https://img.alicdn.com/bao/uploaded/i4/2242758632/TB24gRnbAZmBKNjSZPiXXXFNVXa_!!2242758632.jpg_200x200q90.jpg_.webp', '58', 23264),
(9, '馨瑞克丝滑香浓瓶装海盐咖啡饮料即饮提神咖', 'https://img.alicdn.com/bao/uploaded/i1/125238338/TB2QJisXRjTBKNjSZFNXXasFXXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', '24', 15),
(10, '@港仔文艺男 港风夏刺绣短袖T恤男士韩版清新宽松休闲衣服潮流白', 'https://img.alicdn.com/bao/uploaded/i1/1091756444/TB2bGdylhSYBuNjSspjXXX73VXa_!!1091756444.jpg_200x200q90.jpg_.webp', '51', 12717);

-- --------------------------------------------------------

--
-- 表的结构 `good_goods`
--

CREATE TABLE IF NOT EXISTS `good_goods` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(40) CHARACTER SET utf8 NOT NULL,
  `img` varchar(250) NOT NULL,
  `desc` varchar(100) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `good_goods`
--

INSERT INTO `good_goods` (`sid`, `title`, `img`, `desc`) VALUES
(1, 'Thom Browne 黑色皮靴', 'https://img.alicdn.com/imgextra/i3/2937984398/TB2ff0ydYsTMeJjy1zeXXcOCVXa_!!2937984398-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp', 'Thom Browne TB 绑带皮靴，玩转酷帅风格。'),
(2, '劲浪蓝牙HIFI落地音箱', 'https://img.alicdn.com/imgextra/i4/2982901759/TB29ecna.l7MKJjSZFDXXaOEpXa_!!2982901759-0-daren.jpg_180x180xzq90.jpg_.webp', '采用Polyglass技术盆锥，充分展现宽阔的中频效果。'),
(3, 'Balenciaga 印花折叠钱包', 'https://img.alicdn.com/imgextra/i1/2245526197/TB2i8tjXsyYBuNkSnfoXXcWgVXa_!!2245526197-0-daren.jpg_180x180xzq90.jpg_.webp', 'logo标签印花亮眼的点缀在内外。'),
(4, 'Bally拼接运动鞋', 'https://img.alicdn.com/imgextra/i4/371832545/TB2QpBJlDnI8KJjSszgXXc8ApXa_!!371832545-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp', '拼接设计强调考究的工艺与剪裁，亮色点缀添注动感潮范。'),
(5, 'Hush Puppies 套脚单鞋', 'https://img.alicdn.com/imgextra/i2/2327670207/TB2HYuRXkKWBuNjy1zjXXcOypXa_!!2327670207-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp', '平跟款式设计，行走轻便。'),
(6, '派克都市珍珠白格子纹原子笔', 'https://img.alicdn.com/imgextra/i2/2461861833/TB2SVlyo9FjpuFjSspbXXXagVXa_!!2461861833-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp', '派克都市珍珠白格子纹原子笔独特的笔身造型设计，时尚又美观，同时兼具亮点。采用派克经典的标志箭型笔夹，十分的美观大气。经典的笔基设计，彰显尊贵质感。高精细不锈钢笔头，配备派克专用原子笔笔芯，使书写顺滑流');

-- --------------------------------------------------------

--
-- 表的结构 `subnav`
--

CREATE TABLE IF NOT EXISTS `subnav` (
  `sid` tinyint(10) unsigned NOT NULL AUTO_INCREMENT,
  `content` varchar(20) CHARACTER SET utf8 NOT NULL,
  `highlight` tinyint(1) unsigned zerofill NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=90 ;

--
-- 转存表中的数据 `subnav`
--

INSERT INTO `subnav` (`sid`, `content`, `highlight`) VALUES
(1, '羽绒服', 1),
(2, '毛呢外套', 1),
(3, '毛衣', 1),
(4, '针织衫', 0),
(5, '棉服', 0),
(6, '连衣裙', 0),
(7, '气场外套', 1),
(8, '风衣', 0),
(9, '裤子', 0),
(10, '卫衣', 1),
(11, 'T恤', 0),
(12, '阔腿裤', 0),
(13, '衬衫', 0),
(14, '牛仔裤', 0),
(15, '半身裙', 0),
(16, '大码女装', 0),
(17, '时尚套装', 0),
(18, '西装', 0),
(19, '打底衫', 0),
(20, '夹克', 0),
(21, '皮衣', 1),
(22, '皮草', 0),
(23, '妈妈装', 0),
(24, '民族舞台', 0),
(25, '腔调', 0),
(26, '私服名媛', 1),
(27, '甜美风', 0),
(28, '文艺风', 0),
(29, '街头风', 1),
(30, '原创', 0),
(31, '通勤风', 0),
(32, '婚纱礼服', 0),
(33, '潮牌馆', 1),
(34, '原创设计', 0),
(35, '风格好店', 1),
(36, 'T恤', 1),
(37, '衬衫', 1),
(38, '夹克', 1),
(39, '外套', 0),
(40, '卫衣', 1),
(41, '明星网红', 0),
(42, '休闲裤', 1),
(43, '牛仔裤', 0),
(44, '风衣', 0),
(45, '西装', 0),
(46, '牛仔外套', 0),
(47, '棒球服', 0),
(48, '针织衫', 0),
(49, '运动外套', 0),
(50, '运动裤', 0),
(51, '九分裤', 0),
(52, '专柜大牌', 1),
(53, 'POLO衫', 0),
(54, '皮衣', 0),
(55, '套装', 0),
(56, '穿搭攻略', 0),
(57, '开衫', 0),
(58, '马甲', 0),
(59, '呢大衣', 0),
(60, '羽绒服', 0),
(61, '棉衣', 0),
(62, '中老年', 0),
(63, '情侣装', 0),
(64, '大码', 0),
(65, '民族风', 0),
(66, '保暖内衣', 0),
(67, '丝绒睡衣', 1),
(68, '内裤女', 0),
(69, '文胸', 1),
(70, '内裤男', 0),
(71, '长袖睡衣', 1),
(72, '珊瑚绒睡衣', 0),
(73, '夹棉睡衣', 0),
(74, '长筒袜', 0),
(75, '棉袜', 0),
(76, '情侣睡衣', 1),
(77, '秋裤', 0),
(78, '保暖背心', 0),
(79, '睡袍', 0),
(80, '男士睡衣', 0),
(81, '塑身衣', 0),
(82, '内衣套装', 0),
(83, '打底裤', 0),
(84, '连体睡衣', 0),
(85, '睡裙女冬', 0),
(86, '聚拢文胸', 0),
(87, '男士袜子', 1),
(88, '棉袜女', 0),
(89, '卡通睡衣', 0);

-- --------------------------------------------------------

--
-- 表的结构 `subnavright`
--

CREATE TABLE IF NOT EXISTS `subnavright` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) CHARACTER SET utf8 NOT NULL,
  `img` varchar(250) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `subnavright`
--

INSERT INTO `subnavright` (`sid`, `title`, `img`) VALUES
(1, '染色瑕疵男装意大利外单弹力中高腰休闲裤男士直筒春秋季牛仔裤长', '//img.alicdn.com/bao/uploaded/i1/49987355/TB2q2yjdcnI8KJjSspeXXcwIpXa_!!49987355.jpg_110x110q90.jpg_.webp'),
(2, 'HH系列九魅品牌折扣店正品女装修身 简约 百搭 连衣裙 5.7夏', '//img.alicdn.com/bao/uploaded/i1/73900259/TB1pkp3eVkoBKNjSZFEXXbrEVXa_!!0-item_pic.jpg_110x110q90.jpg_.webp'),
(3, '特价！好品质 纯棉好穿 修身无袖连衣裙D2350', '//img.alicdn.com/bao/uploaded/i4/107260288/TB24V0quwxlpuFjy0FoXXa.lXXa_!!107260288.jpg_110x110q90.jpg_.webp'),
(4, '欧洲站2018夏季新款条纹T恤搭配吊带牛仔连衣裙两件套', '//img.alicdn.com/bao/uploaded/i7/TB16WW1RFXXXXXLXXXXYXGcGpXX_M2.SS2_110x110q90.jpg_.webp'),
(5, '本期自留黑色海报款 四季裙长短袖黑天鹅丝绒蓬蓬闪钻礼服纱裙17', '//img.alicdn.com/bao/uploaded/i4/52314900/TB1oNLjc6uhSKJjSspjXXci8VXa_!!0-item_pic.jpg_110x110q90.jpg_.webp'),
(6, '2018夏季东大门新款雪纺连衣裙宽松显瘦清新印花中长款吊带背心裙', '//img.alicdn.com/bao/uploaded/i8/TB1STo1QFXXXXX0XVXXYXGcGpXX_M2.SS2_110x110q90.jpg_.webp');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `username` varchar(30) CHARACTER SET utf8 NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`username`, `password`) VALUES
('12345', '12345'),
('13333333323', 'c4ca4238a0b923820dcc509a6f75849b'),
('13333333332', 'c4ca4238a0b923820dcc509a6f75849b'),
('13333333333', 'c4ca4238a0b923820dcc509a6f75849b'),
('13522222222', 'c4ca4238a0b923820dcc509a6f75849b'),
('15555555555', 'c4ca4238a0b923820dcc509a6f75849b'),
('18888888888', '1');
