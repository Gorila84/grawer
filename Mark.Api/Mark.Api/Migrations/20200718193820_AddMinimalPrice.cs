using Microsoft.EntityFrameworkCore.Migrations;

namespace Mark.Api.Migrations
{
    public partial class AddMinimalPrice : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "MinimalPrice",
                table: "BuyingMaterialPrices",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MinimalPrice",
                table: "BuyingMaterialPrices");
        }
    }
}
