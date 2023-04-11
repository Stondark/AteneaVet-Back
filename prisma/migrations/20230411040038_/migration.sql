-- CreateTable
CREATE TABLE `especie` (
    `id_especie` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `clasificacion` INTEGER NOT NULL,
    `esperanza_vida` INTEGER NOT NULL,
    `peso_promedio` DOUBLE NOT NULL,

    INDEX `clasificacion`(`clasificacion`),
    PRIMARY KEY (`id_especie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clasificacionAnimales` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_clasificacion` VARCHAR(120) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `especie` ADD CONSTRAINT `especie_ibfk_1` FOREIGN KEY (`clasificacion`) REFERENCES `clasificacionAnimales`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
