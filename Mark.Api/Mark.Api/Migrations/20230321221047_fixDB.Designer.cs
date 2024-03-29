﻿// <auto-generated />
using System;
using Mark.Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Mark.Api.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20230321221047_fixDB")]
    partial class fixDB
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Mark.Api.Models.BuyingMaterialPrice", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<double>("Height")
                        .HasColumnType("double");

                    b.Property<string>("MarkName")
                        .HasColumnType("text");

                    b.Property<double>("MinimalPrice")
                        .HasColumnType("double");

                    b.Property<double>("SellingPrice")
                        .HasColumnType("double");

                    b.Property<double>("Width")
                        .HasColumnType("double");

                    b.HasKey("Id");

                    b.ToTable("BuyingMaterialPrices");
                });

            modelBuilder.Entity("Mark.Api.Models.MarkMaterialMargin", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<double>("AgencyMultiplier")
                        .HasColumnType("double");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("MarkMaterialMargins");
                });

            modelBuilder.Entity("Mark.Api.Models.MarkingRange", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("MaxHeight")
                        .HasColumnType("int");

                    b.Property<int>("MaxWidth")
                        .HasColumnType("int");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.Property<double>("RangeMultiplier")
                        .HasColumnType("double");

                    b.HasKey("Id");

                    b.ToTable("Ranges");
                });

            modelBuilder.Entity("Mark.Api.Models.MultiplierRange", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("HigherRange")
                        .HasColumnType("int");

                    b.Property<int>("LowerRange")
                        .HasColumnType("int");

                    b.Property<double>("Multiplier")
                        .HasColumnType("double");

                    b.HasKey("Id");

                    b.ToTable("MultiplierRanges");
                });

            modelBuilder.Entity("Mark.Api.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<byte[]>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("varbinary(4000)");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("varbinary(4000)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("varchar(255)")
                        .HasMaxLength(255);

                    b.HasKey("Id");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
