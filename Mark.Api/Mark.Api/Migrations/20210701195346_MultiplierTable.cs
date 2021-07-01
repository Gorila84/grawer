using Microsoft.EntityFrameworkCore.Migrations;

namespace Mark.Api.Migrations
{
    public partial class MultiplierTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MultiplierRanges",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LowerRange = table.Column<int>(nullable: false),
                    HigherRange = table.Column<int>(nullable: false),
                    Multiplier = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MultiplierRanges", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MultiplierRanges");
        }
    }
}
