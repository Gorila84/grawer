﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Mark.Api.Migrations
{
    public partial class InitMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BuyingMaterialPrices",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    MarkName = table.Column<string>(nullable: true),
                    Width = table.Column<double>(nullable: false),
                    Height = table.Column<double>(nullable: false),
                    SellingPrice = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BuyingMaterialPrices", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MarkMaterialMargins",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    AgencyMultiplier = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MarkMaterialMargins", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Ranges",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Quantity = table.Column<int>(nullable: false),
                    RangeMultiplier = table.Column<double>(nullable: false),
                    MaxWidth = table.Column<int>(nullable: false),
                    MaxHeight = table.Column<int>(nullable: false),
                    MnimalPrice = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ranges", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Username = table.Column<string>(maxLength: 255, nullable: false),
                    PasswordHash = table.Column<byte[]>(nullable: false),
                    PasswordSalt = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BuyingMaterialPrices");

            migrationBuilder.DropTable(
                name: "MarkMaterialMargins");

            migrationBuilder.DropTable(
                name: "Ranges");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
