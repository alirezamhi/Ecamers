-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "connectionId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Connection" (
    "connectionId" SERIAL NOT NULL,
    "phoneId" BIGINT NOT NULL,
    "addressId" INTEGER NOT NULL,

    CONSTRAINT "Connection_pkey" PRIMARY KEY ("connectionId")
);

-- CreateTable
CREATE TABLE "Phone" (
    "phoneId" SERIAL NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "cityCode" TEXT NOT NULL DEFAULT '021',
    "homePhoneNumber" TEXT NOT NULL,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("phoneId")
);

-- CreateTable
CREATE TABLE "Address" (
    "addressId" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'iran',

    CONSTRAINT "Address_pkey" PRIMARY KEY ("addressId")
);
